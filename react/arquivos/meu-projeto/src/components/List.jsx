import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Playstation" first_launch={1994}/>
                <Item marca="Xbox" first_launch={2001}/>
                <Item marca="Nintendo" first_launch={1983}/>
                <Item />
            </ul>
        </>
    )
}

export default List