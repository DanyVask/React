const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
    return (
        <div>
            <form onSubmit={sendOrder} className="form-checkout">
                <h2>CHECKOUT</h2>

                <div className="content-input">
                    <label className="label">NOMBRE COMPLETO: </label>
                    <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
                </div>

                <div className="content-input">
                    <label className="label">CORREO ELECTRÓNICO: </label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
                </div>

                <div className="content-input">
                    <label className="label">CONTRASEÑA: </label>
                    <input type="password" name="password" value={dataForm.password} onChange={handleChangeInput} />
                </div>

                <button type="submit" className="button-send-order">ENVIAR ORDEN</button>
            </form>
        </div>
    )
}

export default FormCheckout