function downloadPDF() {
    const pdfUrl = "file:///C:/Users/janin/Downloads/_Resume_VIOS%20(1).pdf"; // Replace with the actual URL of your PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'VIOS_resume.pdf'; // Replace with the desired filename
    link.click();
}

const  = document.getElementById('download');
download.addEventListener('click', downloadPDF);
