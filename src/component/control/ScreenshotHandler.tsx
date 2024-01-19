import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deactivatePrintMode, globalSliceSelector} from "../../store/slice/globalSlice";
import {listItemsList} from "../../config/listItemsList";
import {setPage, setStep} from "../../store/slice/pageSlice";
import {captureScreenshot} from "../../util/captureScreenshot";
import {MAIN_COMPONENT_ID} from "../../react-app-env";
import pptxgen from 'pptxgenjs';

const SCREENSHOT_DELAY = 800;

function ScreenshotHandler() {
    const dispatch = useDispatch();
    const {printMode} = useSelector(globalSliceSelector);

    const handlePrint = (presentation: pptxgen, page: number) => {
        if (page < listItemsList.length) {
            // let page render first
            const currentPage = listItemsList[page];
            dispatch(setPage(page));
            dispatch(setStep(currentPage.showAllItems ? 0 : currentPage.items.length - 1));
            // and then take screenshot
            setTimeout(
                () => takeScreenshot(
                    presentation,
                    // on complete -> take next screenshot
                    () => handlePrint(presentation, page + 1)
                ),
                SCREENSHOT_DELAY
            );
        } else {
            // Save the presentation to a file (or download it)
            presentation.writeFile({fileName: 'MAS_in_der_Logistik.pptx'});
            dispatch(deactivatePrintMode());
        }
    }

    const takeScreenshot = (presentation: pptxgen, onComplete: () => void) => {
        captureScreenshot(MAIN_COMPONENT_ID)
            .then((canvas) => {
                if (canvas) {
                    // Add the screenshot as an image to a new slide
                    const slide = presentation.addSlide();
                    const imgDataUrl = canvas.toDataURL('image/png');

                    slide.addImage({
                        data: imgDataUrl,
                        sizing: {type: "contain", w: '100%', h: '100%'},
                        w: "100%",
                        h: "100%",
                    });
                }
            })
            .finally(() => {
                onComplete()
            });
    }

    useEffect(() => {
        if (printMode) {
            // Create a PowerPoint presentation
            const pptx = new pptxgen();
            handlePrint(pptx, 0);
        }
    }, [printMode])

    return (
        <></>
    );
}

export default ScreenshotHandler;