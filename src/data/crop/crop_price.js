
const data = [
    // economic tree
    
        {
            crop: 'Mango', data: [
                {label: 'Mature', value: '3500'},{label: 'Immature', value: '1750'},{label: 'Seedling', value: '875'}
            ]
        }, 
        {
            crop: 'Mango (Inproved)', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        }, 
        {
            crop: 'Dorowa', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        },
        {
            crop: 'Dabino', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        }, 
        {
            crop: 'Gamji', data: [
                {label: 'Mature', value: '10000'},{label: 'Immature', value: '5000'},{label: 'Seedling', value: '2500'}
            ]
        },
        {
            crop: 'Kadauya', data: [
                {label: 'Mature', value: '10000'},{label: 'Immature', value: '5000'},{label: 'Seedling', value: '2500'}
            ]
        }, 
        {
            crop: 'Rimi', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        },
        {
            crop: 'Tsamia', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        },
        {
            crop: 'Madaci', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        }, 
        {
            crop: 'kanya', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        },
        {
            crop: 'Marke', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        }, 
        {
            crop: 'Gawo', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Aduwa', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        }, 
        {
            crop: 'Goruba', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        },
        {
            crop: 'Giginya', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        }, 
        {
            crop: 'Baobano (Kuka)', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        },
        {
            crop: 'Madobiya', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        }, 
        {
            crop: 'Goba', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        },
        {
            crop: 'Gwanda', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        }, 
        {
            crop: 'Lemun Zaki', data: [
                {label: 'Mature', value: '8000'},{label: 'Immature', value: '4000'},{label: 'Seedling', value: '2000'}
            ]
        },
        {
            crop: 'Lemun Tsami', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        },
        {
            crop: 'Lemon', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        },
        {
            crop: 'Lime', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        },
        {
            crop: 'Lemun Tangerine', data: [
                {label: 'Mature', value: '8000'},{label: 'Immature', value: '4000'},{label: 'Seedling', value: '2000'}
            ]
        }, 
        {
            crop: 'Albijuja', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Neem', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        }, 
        {
            crop: 'Bauran Rafi', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Kashiya', data: [
                {label: 'Mature', value: '2500'},{label: 'Immature', value: '1250'},{label: 'Seedling', value: '625'}
            ]
        }, 
        {
            crop: 'Dalbejiya', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Dusha', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        }, 
        {
            crop: 'Gurijiya', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Gawasa', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        },
        {
            crop: 'Katsari', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        }, 
        {
            crop: 'Kurna', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        },
        {
            crop: 'Kirya', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        }, 
        {
            crop: 'Maje', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        },
        {
            crop: 'Franshana', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        }, 
        {
            crop: 'Sansami', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        },
        {
            crop: 'Baushe', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Danya', data: [
                {label: 'Mature', value: '3500'},{label: 'Immature', value: '1750'},{label: 'Seedling', value: '875'}
            ]
        }, 
        {
            crop: 'Fasadabur', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Ruman', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Magariya', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Taura', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Kalgo Tree', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Kalgo Shub', data: [
                {label: 'Mature', value: '100'},{label: 'Immature', value: '50'},{label: 'Seedling', value: '25'}
            ]
        }, 
        {
            crop: 'Ayaba', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Chediya', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Durumi', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Kawari', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Lalle', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        }, 
        {
            crop: 'Morianga Alicafera', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        },
        {
            crop: 'Giyaya', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Dinya', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        }, 
        {
            crop: 'Grape Fruit', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        },
        {
            crop: 'Kantakara', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        }, 
        {
            crop: 'Matsagi', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        },
        {
            crop: 'Geza', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        }, 
        {
            crop: 'Doka', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Turare', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Gmshina', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Gakwara(Domesticated)', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        },
        {
            crop: 'Gakwara(Wild)', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        }, 
        {
            crop: 'Zuwa', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        },
        {
            crop: 'Aliliba', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        }, 
        {
            crop: 'Goro', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Cashew', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Baure', data: [
                {label: 'Mature', value: '1000'},{label: 'Immature', value: '500'},{label: 'Seedling', value: '250'}
            ]
        }, 
        {
            crop: 'Gwanda Dawa', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Faru', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Zogale', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        },
        {
            crop: 'Palm Tree', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        }, 
        {
            crop: 'Kawo', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Atili', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Passion Fruit', data: [
                {label: 'Mature', value: '5000'},{label: 'Immature', value: '2500'},{label: 'Seedling', value: '1250'}
            ]
        }, 
        {
            crop: 'Kuhu Tree', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        },
        {
            crop: 'Sabara Tree', data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        }, 
        {
            crop: 'Sabara Shrub', data: [
                {label: 'Mature', value: '100'},{label: 'Immature', value: '50'},{label: 'Seedling', value: '25'}
            ]
        },
        {
            crop: 'Shuwaka', data: [
                {label: 'Mature', value: '500'},{label: 'Immature', value: '250'},{label: 'Seedling', value: '125'}
            ]
        }, 
        {
            crop: 'Nuhu', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        },
        {
            crop: 'Coconut', data: [
                {label: 'Mature', value: '2000'},{label: 'Immature', value: '1000'},{label: 'Seedling', value: '500'}
            ]
        }, 
        {
            crop: 'Tsada', data: [
                {label: 'Mature', value: '3000'},{label: 'Immature', value: '1500'},{label: 'Seedling', value: '750'}
            ]
        }, 
        {
            crop: 'Bagaruwa', data: [
                {label: 'Mature', value: '4000'},{label: 'Immature', value: '2000'},{label: 'Seedling', value: '1000'}
            ]
        },



        // economic crops
        {
            crop: 'Millet',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        }, 
        {
            crop: 'Guinea Corn',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        },
        {
            crop: 'Maize',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        }, 
        {
            crop: 'Rice',  data: [
                {label: 'Mature', value: '75000'},{label: 'Immature', value: '37500'},{label: 'Seedling', value: '18750'}
            ]
        },
        {
            crop: 'Beans',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        }, 
        {
            crop: 'Groundnut',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        }, 
        {
            crop: 'Yam',  data: [
                {label: 'Mature', value: '100000'},{label: 'Immature', value: '50000'},{label: 'Seedling', value: '25000'}
            ]
        },
        {
            crop: 'Cotton',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        }, 
        {
            crop: 'Cocoyam',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        },
        {
            crop: 'Casava',  data: [
                {label: 'Mature', value: '30000'},{label: 'Immature', value: '15000'},{label: 'Seedling', value: '7500'}
            ]
        }, 
        {
            crop: 'Casava(Inproved)',  data: [
                {label: 'Mature', value: '200000'},{label: 'Immature', value: '100000'},{label: 'Seedling', value: '50000'}
            ]
        }, 
        {
            crop: 'Soya Bean',  data: [
                {label: 'Mature', value: '70000'},{label: 'Immature', value: '35000'},{label: 'Seedling', value: '17500'}
            ]
        }, 
        {
            crop: 'Sugarcane',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        },
        {
            crop: 'Tomatoes',  data: [
                {label: 'Mature', value: '20000'},{label: 'Immature', value: '10000'},{label: 'Seedling', value: '5000'}
            ]
        }, 
        {
            crop: 'Garden Egg',  data: [
                {label: 'Mature', value: '20000'},{label: 'Immature', value: '10000'},{label: 'Seedling', value: '5000'}
            ]
        }, 
        {
            crop: 'Serrel',  data: [
                {label: 'Mature', value: '10000'},{label: 'Immature', value: '5000'},{label: 'Seedling', value: '2500'}
            ]
        }, 
        {
            crop: 'Spinach, Alehu',  data: [
                {label: 'Mature', value: '10000'},{label: 'Immature', value: '5000'},{label: 'Seedling', value: '2500'}
            ]
        }, 
        {
            crop: 'Sweet Potatoes',  data: [
                {label: 'Mature', value: '30000'},{label: 'Immature', value: '15000'},{label: 'Seedling', value: '7500'}
            ]
        },
        {
            crop: 'Irish Potatoes',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        }, 
        {
            crop: 'Hot Pepper',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        },
        {
            crop: 'Tattasai',  data: [
                {label: 'Mature', value: '40000'},{label: 'Immature', value: '20000'},{label: 'Seedling', value: '10000'}
            ]
        }, 
        {
            crop: 'Mix cropping (Including Yam)',  data: [
                {label: 'Mature', value: '120000'},{label: 'Immature', value: '60000'},{label: 'Seedling', value: '30000'}
            ]
        },
        {
            crop: 'Mix cropping (Excluding Yam)',  data: [
                {label: 'Mature', value: '100000'},{label: 'Immature', value: '50000'},{label: 'Seedling', value: '25000'}
            ]
        },
        {
            crop: 'Pepper (Borkono)',  data: [
                {label: 'Mature', value: '120000'},{label: 'Immature', value: '80000'},{label: 'Seedling', value: '40000'}
            ]
        },
        {
            crop: 'Pepper (Attarugu)',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        }, 
        {
            crop: 'Beniseed (Ridi)',  data: [
                {label: 'Mature', value: '60000'},{label: 'Immature', value: '30000'},{label: 'Seedling', value: '15000'}
            ]
        },
        {
            crop: 'Ginga',  data: [
                {label: 'Mature', value: '100000'},{label: 'Immature', value: '50000'},{label: 'Seedling', value: '25000'}
            ]
        }, 
        {
            crop: 'Tiger nuts(Aya)',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12500'}
            ]
        }, 
        {
            crop: 'Digatana(Acha)',  data: [
                {label: 'Mature', value: '100000'},{label: 'Immature', value: '50000'},{label: 'Seedling', value: '25000'}
            ]
        },
        {
            crop: 'Ceral grass(Iburo)',  data: [
                {label: 'Mature', value: '100000'},{label: 'Immature', value: '50000'},{label: 'Seedling', value: '25000'}
            ]
        }, 
        {
            crop: 'Cocoyam(Gwaza)',  data: [
                {label: 'Mature', value: '25000'},{label: 'Immature', value: '12500'},{label: 'Seedling', value: '6250'}
            ]
        },
        {
            crop: 'Tobaka(Taba)',  data: [
                {label: 'Mature', value: '10000'},{label: 'Immature', value: '5000'},{label: 'Seedling', value: '2500'}
            ]
        }, 
        {
            crop: 'Onions',  data: [
                {label: 'Mature', value: '40000'},{label: 'Immature', value: '20000'},{label: 'Seedling', value: '10000'}
            ]
        }, 
        {
            crop: 'Lettuce',  data: [
                {label: 'Mature', value: '15000'},{label: 'Immature', value: '7500'},{label: 'Seedling', value: '3750'}
            ]
        }, 
        {
            crop: 'Pumpkin',  data: [
                {label: 'Mature', value: '20000'},{label: 'Immature', value: '10000'},{label: 'Seedling', value: '5000'}
            ]
        }, 
        {
            crop: 'Carrots',  data: [
                {label: 'Mature', value: '15000'},{label: 'Immature', value: '7500'},{label: 'Seedling', value: '3750'}
            ]
        }, 
        {
            crop: 'Okro',  data: [
                {label: 'Mature', value: '20000'},{label: 'Immature', value: '10000'},{label: 'Seedling', value: '5000'}
            ]
        }, 
        {
            crop: 'Rigza (Tube)',  data: [
                {label: 'Mature', value: '100000'},{label: 'Immature', value: '50000'},{label: 'Seedling', value: '25000'}
            ]
        },
        {
            crop: 'Wheat',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        }, 
        {
            crop: 'Kwarya',  data: [
                {label: 'Mature', value: '30000'},{label: 'Immature', value: '15000'},{label: 'Seedling', value: '7500'}
            ]
        },
        {
            crop: 'Kabewa',  data: [
                {label: 'Mature', value: '35000'},{label: 'Immature', value: '17500'},{label: 'Seedling', value: '8750'}
            ]
        }, 
        {
            crop: 'Soborodo',  data: [
                {label: 'Mature', value: '50000'},{label: 'Immature', value: '25000'},{label: 'Seedling', value: '12250'}
            ]
        }, 
        {
            crop: 'Water Melon',  data: [
                {label: 'Mature', value: '20000'},{label: 'Immature', value: '10000'},{label: 'Seedling', value: '5000'}
            ]
        },
        {
            crop: 'Govt/Grazing Recours',  data: [
                {label: 'Mature', value: '300000'},{label: 'Immature', value: '150000'},{label: 'Seedling', value: '75000'}
            ]
        },
        {
            crop: 'Plantain',  data: [
                {label: 'Mature', value: '1500'},{label: 'Immature', value: '750'},{label: 'Seedling', value: '375'}
            ]
        }, 
        {
            crop: 'Neem Plantain',  data: [
                {label: 'Mature', value: '550000'},{label: 'Immature', value: '275000'},{label: 'Seedling', value: '137500'}
            ]
        },
        {
            crop: 'Farm Minimum',  data: [
                {label: 'Mature', value: '120000'},{label: 'Immature', value: '60000'},{label: 'Seedling', value: '30000'}
            ]
        }, 
        {
            crop: 'Farm Fadama Minimum',  data: [
                {label: 'Mature', value: '200000'},{label: 'Immature', value: '100000'},{label: 'Seedling', value: '50000'}
            ]
        }, 
        {
            crop: 'Other LGA HQ',  data: [
                {label: 'Mature', value: '80000'},{label: 'Immature', value: '40000'},{label: 'Seedling', value: '20000'}
            ]
        },
        {
            crop: 'Rural Area',  data: [
                {label: 'Mature', value: '60000'},{label: 'Immature', value: '30000'},{label: 'Seedling', value: '15000'}
            ]
        }, 
        {
            crop: 'Others',  data: [
                {label: 'Mature', value: '0'},{label: 'Immature', value: '0'},{label: 'Seedling', value: '0'}
            ]
        }
]

export default data;

