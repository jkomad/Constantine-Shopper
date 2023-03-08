import React, {useState, useCallback }from 'react';

export default function useDialogModal(Component) {
  const [open, setOpen] = React.useState(false);
  const openDialog = React.useCallback(() => {
    setOpen(true);
  }, []);

  const DialogComponent = useCallback(
    ({ ...props }) => {
      if (!open) return null;

      if (Component) {
        return (
          <Component open={open} onClose={() => setOpen(false)} {...props} />
        );
      }
    },
    [open, Component]
  );

  return [DialogComponent, openDialog];
}