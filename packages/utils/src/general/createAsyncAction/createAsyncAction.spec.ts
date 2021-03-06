import { createAsyncAction } from './createAsyncAction';

describe('createAsyncAction suites', () => {
  let action: any;
  beforeEach(() => {
    action = createAsyncAction('TEST');
  });
  test('should have success, failure, pending case', () => {
    expect(action.getType()).toBe('TEST');
    expect(action.success.getType()).toBe('TEST_SUCCESS');
    expect(action.failure.getType()).toBe('TEST_FAILURE');
    expect(action.pending.getType()).toBe('TEST_PENDING');
  });
});
