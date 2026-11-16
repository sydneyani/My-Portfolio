import { render, screen } from '@testing-library/react';
import App from './App';

test('presents Sydney Ani and public project repositories', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 1, name: 'Sydney Ani' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'FormulAI' })).toHaveAttribute(
    'href',
    'https://github.com/sydneyani/FormulAI'
  );
  expect(screen.getByRole('link', { name: 'dotnet-flutter-app' })).toHaveAttribute(
    'href',
    'https://github.com/sydneyani/dotnet-flutter-app'
  );
  expect(screen.getByRole('link', { name: 'university-coursework' })).toHaveAttribute(
    'href',
    'https://github.com/sydneyani/university-coursework'
  );
  expect(screen.getByRole('heading', { name: 'BI – Data Warehouse Developer' })).toBeInTheDocument();
  expect(
    screen.getByText('NVIDIA DLI — Building RAG Agents with LLMs (2025)')
  ).toBeInTheDocument();
  expect(screen.queryByText(/scriptora/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/stitch/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/password/i)).not.toBeInTheDocument();
});
