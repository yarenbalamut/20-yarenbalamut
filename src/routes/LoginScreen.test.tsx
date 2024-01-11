import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';
import * as api from '../services/api';
import { mockReactNativeFirestore } from 'firestore-jest-mock';

const testUsers = [
  { "id": "diZqYcp7jZFn8qUgOalE", "userName": "Yaren", "password": "12345678" },
  { "id": "mfU12DAF67QIooMG9Et0", "userName": "Cankat", "password": "1234567" },
  { "id": "roCGOruDxAf1Aa9CXaJi", "userName": "Sedat", "password": "123456" }
];

mockReactNativeFirestore({
  database: {
    users: testUsers,
  },
});

jest.mock('../services/api', () => ({
  checkUserExists: jest.fn((username, password) => {
    return testUsers.some(user => user.userName === username && user.password === password);
  }),
}));

describe('LoginScreen Testleri', () => {
    test('Giriş Yap butonu tıklandığında handleLogin fonksiyonunu çağırmalıdır.', async () => {

      const mockNavigation = { navigate: jest.fn() };

      const { getByTestId } = render(<LoginScreen navigation={mockNavigation} />);
  
      const loginButton = getByTestId('loginButton');
  
      const usernameInput = getByTestId('usernameInput');
      const passwordInput = getByTestId('passwordInput');
      
      fireEvent.changeText(usernameInput, 'Yaren');
      fireEvent.changeText(passwordInput, '12345678');
  
      fireEvent.press(loginButton);
  
      await waitFor(() => {
        expect(api.checkUserExists).toHaveBeenCalledWith('Yaren', '12345678');
      });
  
      await waitFor(() => {
        expect(mockNavigation.navigate).toHaveBeenCalledWith('HomeScreen');
      });
    });
  });
  
