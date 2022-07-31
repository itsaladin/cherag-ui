import * as React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  GestureResponderEvent,
  Platform,
} from 'react-native';
import type { Theme } from '../../types';
import { getTouchableRippleColors } from './utils';

type Props = React.ComponentPropsWithRef<typeof TouchableWithoutFeedback> & {
  borderless?: boolean;
  background?: Object;
  centered?: boolean;
  disabled?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  onLongPress?: (e: GestureResponderEvent) => void;
  rippleColor?: string;
  underlayColor?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const TouchableRipple = ({
  style,
  background: _background,
  borderless = false,
  disabled: disabledProp,
  rippleColor,
  underlayColor: _underlayColor,
  children,
  theme,
  ...rest
}: Props) => {
  const handlePressIn = (e: any) => {
    const { centered, onPressIn } = rest;

    onPressIn?.(e);

    const { calculatedRippleColor } = getTouchableRippleColors({
      theme,
      rippleColor,
    });

    const button = e.currentTarget;
    const style = window.getComputedStyle(button);
    const dimensions = button.getBoundingClientRect();

    let touchX;
    let touchY;

    const { changedTouches, touches } = e.nativeEvent;
    const touch = touches?.[0] ?? changedTouches?.[0];

    // If centered or it was pressed using keyboard - enter or space
    if (centered || !touch) {
      touchX = dimensions.width / 2;
      touchY = dimensions.height / 2;
    } else {
      touchX = touch.locationX ?? e.pageX;
      touchY = touch.locationY ?? e.pageY;
    }

    // Get the size of the button to determine how big the ripple should be
    const size = centered
      ? // If ripple is always centered, we don't need to make it too big
        Math.min(dimensions.width, dimensions.height) * 1.25
      : // Otherwise make it twice as big so clicking on one end spreads ripple to other
        Math.max(dimensions.width, dimensions.height) * 2;

    // Create a container for our ripple effect so we don't need to change the parent's style
    const container = document.createElement('span');

    container.setAttribute('data-paper-ripple', '');

    Object.assign(container.style, {
      position: 'absolute',
      pointerEvents: 'none',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      borderTopLeftRadius: style.borderTopLeftRadius,
      borderTopRightRadius: style.borderTopRightRadius,
      borderBottomRightRadius: style.borderBottomRightRadius,
      borderBottomLeftRadius: style.borderBottomLeftRadius,
      overflow: centered ? 'visible' : 'hidden',
    });

    // Create span to show the ripple effect
    const ripple = document.createElement('span');

    Object.assign(ripple.style, {
      position: 'absolute',
      pointerEvents: 'none',
      backgroundColor: calculatedRippleColor,
      borderRadius: '50%',

      /* Transition configuration */
      transitionProperty: 'transform opacity',
      transitionDuration: `${Math.min(size * 1.5, 350)}ms`,
      transitionTimingFunction: 'linear',
      transformOrigin: 'center',

      /* We'll animate these properties */
      transform: 'translate3d(-50%, -50%, 0) scale3d(0.1, 0.1, 0.1)',
      opacity: '0.5',

      // Position the ripple where cursor was
      left: `${touchX}px`,
      top: `${touchY}px`,
      width: `${size}px`,
      height: `${size}px`,
    });

    // Finally, append it to DOM
    container.appendChild(ripple);
    button.appendChild(container);

    // rAF runs in the same frame as the event handler
    // Use double rAF to ensure the transition class is added in next frame
    // This will make sure that the transition animation is triggered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Object.assign(ripple.style, {
          transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
          opacity: '1',
        });
      });
    });
  };

  const handlePressOut = (e: any) => {
    rest.onPressOut?.(e);

    const containers = e.currentTarget.querySelectorAll(
      '[data-paper-ripple]'
    ) as HTMLElement[];

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        containers.forEach((container) => {
          const ripple = container.firstChild as HTMLSpanElement;

          Object.assign(ripple.style, {
            transitionDuration: '250ms',
            opacity: 0,
          });

          // Finally remove the span after the transition
          setTimeout(() => {
            const { parentNode } = container;

            if (parentNode) {
              parentNode.removeChild(container);
            }
          }, 500);
        });
      });
    });
  };

  const disabled = disabledProp || !rest.onPress;

  return (
    <TouchableWithoutFeedback
      {...rest}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <View style={[styles.touchable, borderless && styles.borderless, style]}>
        {React.Children.only(children)}
      </View>
    </TouchableWithoutFeedback>
  );
};

TouchableRipple.supported = true;

const styles = StyleSheet.create({
  touchable: {
    position: 'relative',
    ...(Platform.OS === 'web' && { cursor: 'pointer' }),
  },
  borderless: {
    overflow: 'hidden',
  },
});

export default TouchableRipple;
