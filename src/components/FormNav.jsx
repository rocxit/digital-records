//style={{display:"flex", flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}
const FormNav = () => {
    return (
        <div>
        <h1>Member Entry:::</h1>
        <h2>New Doner</h2>
        <label htmlFor="reg-date">Reg. Date:</label>
        <input id="reg-date" name="regDate" type="date" />
    </div>
    );
}

export default FormNav;
