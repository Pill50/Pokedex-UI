import styled from 'styled-components';

export const Container = styled.div``;

export const Select = styled.select`
    height: 3.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
    margin-left: 12px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #2f5aff;
    background-color: #060b28;
    color: white;

    @media (max-width: 40.94rem) {
        width: 100%;
        margin-left: 0;
    }
`;

export const Option = styled.option`
    border: none;
`;
