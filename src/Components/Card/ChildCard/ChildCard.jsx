import '../ChildCard/ChildCard.css'
 function ChildCard(){
    return(
        <div className='ChildCard'>
            <h1>PERFUME</h1>
            <h2>Gabrielle Essence Eau De Parfum</h2>
            <p>
                A floral, solar and voluptuous interpretation 
                composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.
            </p>
            <div>$149.99<sup>$169.99</sup></div>
            <button>Add to Cart</button>
        </div>
    );
}

export default ChildCard