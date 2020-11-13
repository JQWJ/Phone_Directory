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

const SearchUser = (props) => {

    const { onChange, infos } = props

    const onSearch = (e) => {
        onChange(e)
    }

    return (
        <Styled.Body>
            <input 
                onChange={onSearch}
                value={infos}
            />
        </Styled.Body>
    )

}

export default SearchUser