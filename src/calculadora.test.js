import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Calculadora from "./calculadora";
 
describe('Calculadora', () => {

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculadora />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('deve limpar o campo de números', () => {
        const { getByTestId, getByText} = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

});