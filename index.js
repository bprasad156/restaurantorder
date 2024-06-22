 <script>
        let co = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

        const getMenu = async () => {
            try {
                const response = await fetch(co);
                const menu = await response.json();
                console.log(menu);
                displayMenu(menu);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        };

        const displayMenu = (menu) => {
            const menuDiv = document.getElementById('menu');
            menu.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'menu-item';
                itemDiv.textContent = ${item.name} - $${item.price};
                menuDiv.appendChild(itemDiv);
            });
        };

        const takeOrder = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const burgers = ["Burger1", "Burger2", "Burger3"];
                    const selectedBurgers = [];
                    for (let i = 0; i < 3; i++) {
                        const randomIndex = Math.floor(Math.random() * burgers.length);
                        selectedBurgers.push(burgers[randomIndex]);
                    }
                    resolve(selectedBurgers);
                }, 2500);
            });
        };

        const orderPrep = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ order_status: true, paid: false });
                }, 1500);
            });
        };

        const payOrder = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ order_status: true, paid: true });
                }, 1000);
            });
        };

        const thankyouFnc = () => {
            alert('Thank you for eating with us today!');
        };

        const handleOrder = async () => {
            const order = await takeOrder();
            console.log('Order:', order);
            const prepStatus = await orderPrep();
            console.log('Preparation Status:', prepStatus);
            const paymentStatus = await payOrder();
            console.log('Payment Status:', paymentStatus);
            if (paymentStatus.paid) {
                thankyouFnc();
            }
        };

        window.onload = () => {
            getMenu();
        };

        document.getElementById('orderButton').addEventListener('click', handleOrder);
    </script>
