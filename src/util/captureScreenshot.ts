import html2canvas from 'html2canvas';

export const captureScreenshot = async (componentId: string): Promise<HTMLCanvasElement | null> => {
    const element = document.getElementById(componentId);
    if (!element) {
        return null;
    }

    // Use html2canvas to capture the screenshot
    return await html2canvas(element);
};