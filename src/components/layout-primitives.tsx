import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';

const box = tv({
  variants: {
    width: {
      full: 'w-full',
    },
  },
});

type BoxProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof box> & {
    asChild?: boolean;
  };

export const Box = ({
  children,
  asChild,
  width,
  className,
  ...attrs
}: BoxProps) => {
  const Tag = asChild ? Slot : 'div';

  const boxClassNames = box({ width });

  return (
    <Tag {...attrs} className={twMerge(boxClassNames, className)}>
      {children}
    </Tag>
  );
};

const flexVariants = {
  flexible: {
    true: 'flex-1',
  },
  justify: {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
    end: 'justify-end',
  },
  align: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  },
  gap: {
    '4': 'gap-1',
    '8': 'gap-2',
    '12': 'gap-3',
    '16': 'gap-4',
    '20': 'gap-5',
    '24': 'gap-6',
  },
};

const stack = tv({
  base: 'flex flex-col',
  variants: flexVariants,
  defaultVariants: {
    gap: '4',
  },
});

type StackProps = BoxProps & VariantProps<typeof stack>;

export const Stack = ({
  className,
  children,
  justify,
  align,
  gap,
  flexible,
  ...attrs
}: StackProps) => {
  const stackClassNames = stack({ justify, align, gap, flexible });

  return (
    <Box {...attrs} className={twMerge(stackClassNames, className)}>
      {children}
    </Box>
  );
};

const inline = tv({
  base: 'flex',
  variants: flexVariants,
  defaultVariants: {
    gap: '4',
  },
});

type InlineProps = BoxProps & VariantProps<typeof inline>;

export const Inline = ({
  className,
  children,
  justify,
  align,
  gap,
  flexible,
  ...attrs
}: InlineProps) => {
  const inlineClassNames = inline({ justify, align, gap, flexible });

  return (
    <Box {...attrs} className={twMerge(inlineClassNames, className)}>
      {children}
    </Box>
  );
};
