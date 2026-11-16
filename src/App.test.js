import { render, screen } from '@testing-library/react';
import App from './App';

test('presents Sydney Ani, flagship work, and no private projects', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'Sydney Ani' })).toBeInTheDocument();
  expect(
    screen.getByText('BI / Data Warehouse Developer & Applied AI Engineer')
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Data Scientist / Software Engineer' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'CiteGround' })).toHaveAttribute(
    'href',
    'https://github.com/sydneyani/rag-eval-assistant'
  );
  expect(screen.getByRole('link', { name: 'Meridian' })).toHaveAttribute(
    'href',
    'https://github.com/sydneyani/dotnet-flutter-app'
  );
  expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute(
    'href',
    '/resume.html'
  );
  expect(screen.queryByText(/scriptora/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/stitch/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/\bTBD\b/)).not.toBeInTheDocument();
  expect(screen.queryByText(/password/i)).not.toBeInTheDocument();
});
