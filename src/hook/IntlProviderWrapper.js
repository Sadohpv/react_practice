import { IntlProvider } from "react-intl";
import LanguageUtils from "../utils/LanguageUtils";
import { useDispatch, useSelector } from "react-redux";

const messages = LanguageUtils.getFlattenedMessages();
function IntlProviderWrapper({ children }) {
	const language = useSelector((state) => state.app.language);
	return (
		<IntlProvider locale={language} messages={messages[language]} defaultLocale="vi">
			{children}
		</IntlProvider>
	);
}

export default IntlProviderWrapper;
