export const mermaidThemeConfig = {
  themeVariables: {
    // Token values sourced from govuk-frontend/dist/govuk/govuk-frontend.min.css (:root custom properties)
    // Typography source from govuk settings: dist/govuk/settings/_typography-font.scss
    fontFamily: "Arial, sans-serif", // $govuk-font-family
    fontSize: "19px", // GOV.UK default body size on tablet+ (typography responsive settings)
    background: "#fff", // --govuk-body-background-colour
    lineColor: "#484949", // --govuk-secondary-text-colour
    arrowheadColor: "#484949", // --govuk-secondary-text-colour
    primaryColor: "#f4f8fb", // --govuk-surface-background-colour
    primaryTextColor: "#0b0c0c", // --govuk-text-colour
    primaryBorderColor: "#cecece", // --govuk-border-colour
    secondaryColor: "#1d70b8", // --govuk-brand-colour
    secondaryTextColor: "#0b0c0c", // --govuk-text-colour
    secondaryBorderColor: "#1a65a6", // --govuk-link-colour
    tertiaryColor: "#f4f8fb", // --govuk-surface-background-colour
    tertiaryTextColor: "#0b0c0c", // --govuk-text-colour
    tertiaryBorderColor: "#cecece", // --govuk-border-colour
    noteBkgColor: "#fd0", // --govuk-focus-colour
    noteTextColor: "#0b0c0c", // --govuk-focus-text-colour
    noteBorderColor: "#0b0c0c", // --govuk-input-border-colour
    mainBkg: "#fff", // --govuk-body-background-colour
    nodeBkg: "#fff", // --govuk-body-background-colour
    nodeBorder: "#0b0c0c", // --govuk-input-border-colour
    edgeLabelBackground: "#f4f8fb", // --govuk-surface-background-colour
    actorBorder: "#0b0c0c", // --govuk-input-border-colour
    activationBorderColor: "#1a65a6", // --govuk-link-colour
    activationBkgColor: "#f4f8fb", // --govuk-surface-background-colour
    sequenceNumberColor: "#fff", // --govuk-body-background-colour
    sectionBkgColor2: "#fff", // --govuk-body-background-colour
    excludeBkgColor: "#cecece", // --govuk-border-colour
    activeTaskBorderColor: "#1d70b8", // --govuk-brand-colour
    activeTaskBkgColor: "#1d70b8", // --govuk-brand-colour
    doneTaskBkgColor: "#cecece", // --govuk-border-colour
    doneTaskBorderColor: "#484949", // --govuk-secondary-text-colour
    critBkgColor: "#ca3535", // --govuk-error-colour
    critBorderColor: "#ca3535", // --govuk-error-colour
    todayLineColor: "#ca3535", // --govuk-error-colour
    gridColor: "#cecece", // --govuk-border-colour
    taskTextClickableColor: "#1a65a6", // --govuk-link-colour
    relationLabelBackground: "#f4f8fb", // --govuk-surface-background-colour
    pieStrokeColor: "#0b0c0c", // --govuk-text-colour
    pieOuterStrokeColor: "#0b0c0c", // --govuk-text-colour
    pieOpacity: "0.8", // custom opacity choice (not from GOV.UK token)
    git0: "#1d70b8", // --govuk-brand-colour
    git1: "#1a65a6", // --govuk-link-colour
    git2: "#0f7a52", // --govuk-success-colour
    git3: "#54319f", // --govuk-link-visited-colour
    git4: "#0f385c", // --govuk-link-hover-colour
    git5: "#ca3535", // --govuk-error-colour
    git6: "#fd0", // --govuk-focus-colour
    git7: "#cecece", // --govuk-border-colour
    cScale0: "#1d70b8", // --govuk-brand-colour
    cScale1: "#1a65a6", // --govuk-link-colour
    cScale2: "#0f7a52", // --govuk-success-colour
    cScale3: "#54319f", // --govuk-link-visited-colour
    cScale4: "#0f385c", // --govuk-link-hover-colour
    cScale5: "#ca3535", // --govuk-error-colour
    cScale6: "#fd0", // --govuk-focus-colour
    cScale7: "#cecece", // --govuk-border-colour
    cScale8: "#f4f8fb", // --govuk-surface-background-colour
    cScale9: "#0b0c0c", // --govuk-text-colour
    cScale10: "#484949", // --govuk-secondary-text-colour
    cScale11: "#fff", // --govuk-body-background-colour
    xyChart: {
      xAxisTickColor: "#484949", // --govuk-secondary-text-colour
      xAxisLineColor: "#484949", // --govuk-secondary-text-colour
      yAxisTickColor: "#484949", // --govuk-secondary-text-colour
      yAxisLineColor: "#484949", // --govuk-secondary-text-colour
      plotColorPalette:
        "#1d70b8,#1a65a6,#0f7a52,#54319f,#0f385c,#ca3535,#fd0,#cecece,#484949,#f4f8fb", // composed from GOV.UK brand/link/success/visited/hover/error/focus/border/text/surface tokens
    },
  },
};
