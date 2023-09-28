async function fetchData() {
    try {
        const response = await fetch('#'); // Ganti URL dengan API atau sumber data yang sesuai
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return [];
    }
}

async function createMenu() {
    const menuElement = document.getElementById('menu');
    const menuData = await fetchData();

    menuData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        menuElement.appendChild(listItem);
    });
}

createMenu();
