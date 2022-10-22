import s from './SwitchButton.module.css';

const SwitchButton = () => {
    return (
        <div className={s.headerContainerButton}>
            <input
                className={s.reactSwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className={s.reactSwitchLabel}
                htmlFor={`react-switch-new`}
            >
                <span className={s.reactSwitchButton} />
            </label>
        </div>
    )
};

export default SwitchButton;