export const CartWidget = ({ cantCarrito }) => {
    return (
      <>
        <button className="btn btn-light disabled"><i className="fas fa-shopping-cart fa-lg"></i></button>
        <button type="button" class="btn btn-light disabled">{cantCarrito}</button>
      </>
    )
  }