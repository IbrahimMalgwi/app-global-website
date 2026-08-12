import { render, screen } from '@testing-library/react';

jest.mock('framer-motion', () => {
  const React = require('react');
  const createMotionComponent = (tag) =>
    React.forwardRef(({ children, whileHover, whileTap, whileInView, viewport, variants, custom, layout, layoutId, initial, animate, exit, transition, drag, dragConstraints, onDragEnd, onHoverStart, onHoverEnd, ...props }, ref) =>
      React.createElement(tag, { ...props, ref }, children)
    );

  return {
    motion: new Proxy({}, {
      get: (_, tag) => createMotionComponent(tag),
    }),
    AnimatePresence: ({ children }) => <>{children}</>,
    useInView: () => true,
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: () => undefined,
  };
});

const mockMatchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(mockMatchMedia),
  });
});

test('renders the primary site sections with normalized product names', async () => {
  const { default: App } = await import('./App');

  render(<App />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Our Subsidiaries/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Latest Insights/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Let's Connect/i })).toBeInTheDocument();

  expect(screen.getAllByText(/GlobalCare EHR/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/AppGlobal Pay/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/GlobalShell Resources/i).length).toBeGreaterThan(0);
});
