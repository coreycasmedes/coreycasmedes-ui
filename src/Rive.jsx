import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import Rive from '@rive-app/react-canvas';
import RiveImg from './1914-3829-solar-system-animation.riv';

export default function Example() {
  const { RiveComponent } = useRive({
    src: {RiveImg}
,    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
}