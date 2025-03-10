let currentPage = 1;
const totalPages = 3;

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById(`page-${i}`).style.display = i === page ? "grid" : "none";
    }
    document.getElementById("page-number").textContent = `Page ${page} of ${totalPages}`;
}

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});