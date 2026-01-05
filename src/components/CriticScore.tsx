import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
}

export default function CriticScore({ score }: Props) {
   const color = (score: number) => {
        if (score > 75) {
            return 'green';
        }

        if (score > 60) {
            return 'yellow';
        }

        return '';
    }

    return (
        <Badge
            colorScheme={ color(score)}
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
        >{ score }</Badge>
    );
}
