const loadphone = async (searchtext) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayphones(phones);
}

const displayphones = phones => {
    // console.log(phones)
    const phonContainer = document.getElementById('phone-container')
    // clear phone container cards vefore adding new cards
    phonContainer.textContent = '';

    // display show all button if there are more 
    const showall = document.getElementById('show-all-container');
    if(phones.length > 11){
        showall.classList.remove('hidden')
    }
    else{
        showall.classList.add('hidden')
    }

    // display only first 10 phones
    phones = phones.slice(0,10);


    phones.forEach(phone => {
        // console.log(phone);
        //2 create a div
        const phonecard = document.createElement('div');
        phonecard.classList = `card bg-base-100 shadow-xl`;
        // 3 set inner html
        phonecard.innerHTML = `
        <figure><img src="${phone.image}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        `;

        phonContainer.appendChild(phonecard);
    })
}

// handel search button
const handelsearch = () =>{
    const searchField = document.getElementById('search-container');
    const searchtext = searchField.value;
    console.log(searchtext);
    loadphone(searchtext)
}

const handelsearch2 = ()  =>{
    const searchField2 = document.getElementById('search-container2')
    const searchtext2 = searchField2.value;
    loadphone(searchtext2);
}

loadphone();