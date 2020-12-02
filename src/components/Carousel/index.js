import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SlickBase from 'react-slick';
import createBlock from '../../utils/createBlock';

const defaultSettings = {
  // prevArrow: '<div class="slick-prev"></div>',
  // nextArrow: '<div class="slick-next"></div>',
};
const propTypes = {
  // /** Define carousel container, necessary for proper form accessibility. */
  // name: PropTypes.string.isRequired,
  /**
   * The indicator inside content
   */
  dotInside: PropTypes.bool,
  /** [Define settings](https://react-slick.neostack.com/docs/api) */
  settings: PropTypes.object,
};

const defaultProps = {
  dotInside: false,
  settings: {
    infinite: true,
    dots: true,
  },
};

const Carousel = React.forwardRef(({ className, dotInside, settings, ...props }, ref) => {
  const setting = { ...settings, ...defaultSettings };
  // useEffect(() => {
  //   if (typeof (jQuery) !== 'function') return undefined;
  //   jQuery(`[slick-container="${name}"]`).slick(setting);
  //   return () => {
  //     jQuery(`[slick-container="${name}"]`).slick('unslick');
  //   };
  // }, []);

  return (
    <SlickBase
      {...props}
      {...setting}
      ref={ref}
      className={classNames(
        'Carousel',
        dotInside && 'Carousel--dotsInside',
        className && className
      )}
    />
  );
});

const Item = createBlock('Carousel-item');

Carousel.displayName = 'Carousel';
Carousel.defaultProps = defaultProps;
Carousel.propTypes = propTypes;
Carousel.Item = Item;
export default Carousel;
