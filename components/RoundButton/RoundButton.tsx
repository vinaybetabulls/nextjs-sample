import React, { CSSProperties } from "react";
import useStyles from "./RoundButton.styles";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import Fab from "@material-ui/core/Fab";

export type Props = {
  icon: string;
  label?: string;
  ariaLabel: string;
  disabled?: boolean;
  onClick: () => any;
  labelAlign?: "side" | "bottom";
  className?: string;
  classNames?: { [key in "container" | "label"]?: string };
  small?: boolean;
  iconWidth?: number;
  style?: CSSProperties;
  id?: string;
};

const RoundButton = (props: Props) => {
  const {
    icon,
    label,
    labelAlign,
    ariaLabel,
    disabled,
    onClick,
    className,
    classNames,
    small,
    iconWidth,
    style,
    id,
  } = props;
  const classes = useStyles();
  const labelClassName = {
    [classes.label]: true,
    [classes.labelAlignSide]: !labelAlign || labelAlign === "side",
    [classes.labelAlignBottom]: labelAlign === "bottom",
  };

  return (
    <div
      style={style}
      className={clsx(
        classes.buttonContainer,
        className,
        classNames?.container,
        small && classes.small
      )}
      id={id ?? ""}
    >
      <Fab
        variant="circular"
        className={clsx(classes.roundButton, small && classes.small)}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        TouchRippleProps={{ classes: { child: classes.rippleClass } }}
      >
        <Icon
          className={clsx(classes.icon, disabled && classes.disabledIcon)}
          {...(iconWidth && { style: { width: iconWidth } })}
        >
          {icon}
        </Icon>
      </Fab>
      {label && (
        <span className={clsx(labelClassName, classNames?.label)}>{label}</span>
      )}
    </div>
  );
};

export default RoundButton;
