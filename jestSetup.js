jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: jest.fn().mockImplementation(({ children }) => children),
    TouchableOpacity: jest.fn().mockImplementation(({ children }) => children),
    TouchableHighlight: jest.fn().mockImplementation(({ children }) => children),
    TouchableNativeFeedback: jest.fn().mockImplementation(({ children }) => children),
    TouchableWithoutFeedback: jest.fn().mockImplementation(({ children }) => children),
    ScrollView: jest.fn().mockImplementation(({ children }) => children),
    Switch: jest.fn(),
    TextInput: jest.fn(),
    DrawerLayout: jest.fn(),
    PanGestureHandler: jest.fn(),
    PinchGestureHandler: jest.fn(),
    RotationGestureHandler: jest.fn(),
    FlingGestureHandler: jest.fn(),
    TapGestureHandler: jest.fn(),
    LongPressGestureHandler: jest.fn(),
    ForceTouchGestureHandler: jest.fn(),
  };
});
