import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Skeleton } from "~/components/ui/skeleton";

export function ImageSkeleton() {
  return (
    <div className="space-y-3">
      <AspectRatio ratio={16 / 9}>
        <Skeleton className="h-[520px] w-[920px] rounded-none object-cover" />
      </AspectRatio>
    </div>
  );
}
