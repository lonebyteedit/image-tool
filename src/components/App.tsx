import { i18nService } from '../i18n/i18nService';
import MainInterface from './MainInterface/MainInterface';
import NotificationArea from './NotificationArea/NotificationArea';

// This component acts as the root of the Solid.js application
// and provides the i18n context to all children.
export default function App(props: { interactiveTexts: any }) {
  i18nService.init(props.interactiveTexts);

  return (
    <>
      <NotificationArea />
      <MainInterface />
    </>
  );
}
