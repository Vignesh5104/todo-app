import styled from "styled-components"

export const InputContainer = styled.form`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 576px){
     width: 100%;   
    }
`

export const Input = styled.input`
    width: 75%;
    height: 35px;
    background-color: #F5F7F8;
    font-size: 17px;
    border: none;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    padding: 20px;
    margin-right: 10px;
    @media screen and (max-width: 576px){
     height: 27px;   
    }
`

export const AddButton = styled.button`
    width: 23%;
    height: 45px;
    background-color: #2E949F;
    color: #F5F7F8;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    @media screen and (max-width: 576px){
     width: 25%;   
    }
`
