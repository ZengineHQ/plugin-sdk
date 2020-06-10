import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Mock window for testing.
// jest.mock('notistack', () => ({
//   useSnackbar: () => ({
//     enqueueSnackbar: () => null,
//   }),
// }));

// Reduce test boilerplate.
global.fireEvent = fireEvent;
global.render = render;
global.act = act;
