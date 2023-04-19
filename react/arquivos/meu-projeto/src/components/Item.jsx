import PropTypes from 'prop-types'

function Item({marca, first_launch}) {
    return (
        <>
        <li>{marca} - {first_launch}</li>
        </>
    )

}

Item.propTypes = {
    marca: PropTypes.string,
    first_launch: PropTypes.number
}

Item.defaultProps = {
    marca: "Faltou a marca",
    first_launch: 0
}

export default Item
