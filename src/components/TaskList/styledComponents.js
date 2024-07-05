import styled from "styled-components"

export const TaskItem = styled.li`
    height: 50px;
    margin-left: 0px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0D9F9A;
    border-radius: 15px;
    width: 70%;
    margin-top: 15px;
    padding: 15px;
    @media screen and (max-width: 576px){
        width: 98%;
    }
`

export const TextContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: none;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
`

export const Text = styled.p`
    color: #D7FCF8;
    font-size: 17px;
    font-weight: 500;
`

export const OptionsContainer = styled.div`
    display: flex;
    max-width: 20%;
`

export const Button = styled.button`
    width: 25px;
    height: 25px;
    color: yellow;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    margin-right: 10px;
    outline: none;
    cursor: pointer;
`
