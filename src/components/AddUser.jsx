import React from 'react';
import styled from 'styled-components';

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `,
}

const AddUser = (props) => {

    const { onClick } = props

    return (
        <Styled.Body>
            <button
                onClick={onClick}
            >추가하기</button>
        </Styled.Body>
    )

}

export default AddUser