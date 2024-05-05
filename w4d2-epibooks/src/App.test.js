import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import WelcomeComponent from './components/welcome/WelcomeComponent';
import CommentArea from './components/commentComponent/CommentArea';
import '@testing-library/jest-dom/extend-expect';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('renders welcome message', () => {
  render(<WelcomeComponent />);
  const welcomeElement = screen.getByText(/Welcome to EpiBooks BookStore/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders all the book cards', () =>{
  render (<App />);
  const allBookCards = screen.getAllByTestId('singleBookCard')
  expect(allBookCards) === 150;
})

test('renders comment area', ()=>{
  render (<CommentArea />)
  const commentAreaComponent = screen.getByText(/Comment Area/i);
  expect(commentAreaComponent).toBeInTheDocument();
})

describe('navbar filtering books', () => {
  it('search book with destiny in the title', async () => {
    render(<App />);
    const inputSearch = screen.getAllByPlaceholderText('Search Book')[0];
    fireEvent.change(inputSearch, {target: {value: 'destiny'}});
    await waitFor(() => {
      const allTheBooks = screen.getAllByTestId('book-title');
      expect(allTheBooks).toHaveLength(3);
    });
  });
});