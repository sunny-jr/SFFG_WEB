
export function convertBuffertoBase64(file: any) {
    const blob = new Blob([file], { type: file.type });
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}