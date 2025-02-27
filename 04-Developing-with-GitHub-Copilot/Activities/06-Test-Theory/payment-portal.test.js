import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaymentPortal from './payment-portal';

describe('PaymentPortal', () => {
  describe('Form Rendering', () => {
    it('should render the payment form', () => {
      render(<PaymentPortal />);
      expect(screen.getByTestId('payment-form')).toBeInTheDocument();
    });

    it('should render the card number input', () => {
      render(<PaymentPortal />);
      expect(screen.getByTestId('card-number-input')).toBeInTheDocument();
    });

    it('should render the expiry date input', () => {
      render(<PaymentPortal />);
      expect(screen.getByTestId('expiry-date-input')).toBeInTheDocument();
    });

    it('should render the CVV input', () => {
      render(<PaymentPortal />);
      expect(screen.getByTestId('cvv-input')).toBeInTheDocument();
    });

    it('should render the submit button', () => {
      render(<PaymentPortal />);
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should show error for empty card number', () => {
      render(<PaymentPortal />);
      fireEvent.click(screen.getByTestId('submit-button'));
      expect(screen.getByTestId('card-number-error')).toBeInTheDocument();
    });

    it('should show error for invalid card number', () => {
      render(<PaymentPortal />);
      fireEvent.change(screen.getByTestId('card-number-input'), { target: { value: '1234' } });
      fireEvent.click(screen.getByTestId('submit-button'));
      expect(screen.getByTestId('card-number-error')).toBeInTheDocument();
    });

    it('should show error for empty expiry date', () => {
      render(<PaymentPortal />);
      fireEvent.click(screen.getByTestId('submit-button'));
      expect(screen.getByTestId('expiry-date-error')).toBeInTheDocument();
    });

    it('should show error for empty CVV', () => {
      render(<PaymentPortal />);
      fireEvent.click(screen.getByTestId('submit-button'));
      expect(screen.getByTestId('cvv-error')).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    it('should submit the form with valid data', () => {
      render(<PaymentPortal />);
      fireEvent.change(screen.getByTestId('card-number-input'), { target: { value: '4111111111111111' } });
      fireEvent.change(screen.getByTestId('expiry-date-input'), { target: { value: '12/23' } });
      fireEvent.change(screen.getByTestId('cvv-input'), { target: { value: '123' } });
      fireEvent.click(screen.getByTestId('submit-button'));
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    });
  });
});
