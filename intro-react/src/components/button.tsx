import styled from "styled-components"

const StyledButton = styled.button`
    padding: 8px;
    background-color: rgb(106, 129, 154);
    font-size: 18px;
    color: white;
    border: 2px solid whitesmoke;
    border-radius: 5px;
`

function Button () {
    return (
        <div className="button">
            <a href="https://github.com/hashfimw" target="_blank">
            <StyledButton>read more</StyledButton>
            </a>
        </div>
    )
}

export default Button