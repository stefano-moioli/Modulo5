import { fireEvent, render, screen } from '@testing-library/react';
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

/* describe('navbar filtering books', () => {
  it('search book with destiny in the title', async () => {
    render(<App />);
    const inputSearch = screen.getAllByPlaceholderText(/Search Book/i);
    fireEvent.change(inputSearch, {target: { value: 'destiny' }})
      const allTheBooks = await screen.getAllByTestId('singleBookCard');
      expect(allTheBooks).toHaveLength(3);
    });
  });*/

  describe('Border book testing', () => {
    it('change card border color', () => {
      render(<App />)
      const allTheBookCards = screen.getAllByTestId('singleBookCard')
      const firstBookCard = allTheBookCards[0]
      fireEvent.click(firstBookCard)
      expect(firstBookCard).toHaveStyle('border: 2px solid red')
    })
  
    it('restores normal border after clicking on a second book', () => {
      render(<App />)
      const allTheBookCards = screen.getAllByTestId('singleBookCard')
      const firstBookCard = allTheBookCards[0]
      fireEvent.click(firstBookCard)
      expect(firstBookCard).toHaveStyle('border: 2px solid red')
      const secondBookCard = allTheBookCards[1]
      fireEvent.click(secondBookCard)
      expect(firstBookCard).not.toHaveStyle('border: 2px solid red')
    })
  })

  describe('Comment List testing', () => {
     it('renders no book comments on page load', () => {
      render(<App />)
      const allBookComments = screen.queryAllByTestId('single-comment')
      expect(allBookComments).toHaveLength(0)
    })
  
    it('renders comments when selected a book', async () => {
      render(<App />)
      const allBookCards = screen.getAllByTestId('singleBookCard')
      const firstBookCard = allBookCards[0]
      fireEvent.click(firstBookCard)
      const allBookComments = await screen.findAllByTestId('single-comment')
      expect(allBookComments).not.toHaveLength(0)
    })
  })