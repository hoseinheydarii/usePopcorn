import React, { useState } from "react"

const TextExpander = ({
  children,
  className,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  collapsedNumWords = 10,
  buttonColor = "blue"
}) => {
  const [isExpand, setIsExpand] = useState(expanded)

  const displayText = isExpand
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."

  const buttonStyle = {
    cursor: "pointer",
    color: buttonColor,
    marginLeft: "6px"
  }

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span
        role="button"
        style={buttonStyle}
        onClick={() => setIsExpand((exp) => !exp)}
      >
        {isExpand ? collapseButtonText : expandButtonText}
      </span>
    </div>
  )
}

export default TextExpander
