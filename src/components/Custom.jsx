import './custom.css'


function Custom(props) {
    return <>
        <div className="background">
            <div className='element'>
                <p>{props.name}</p>
                <div className='placeholder'></div>
            </div>
            <div className='element'>
                <p>{props.age}</p>
                <div className='placeholder'></div>
            </div>
            <div className='element'>
                <p>{props.birthYear}</p>
                <div className='placeholder'></div>
            </div>
        </div>
    </>
};

export default Custom