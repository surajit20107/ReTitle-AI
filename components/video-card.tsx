
"use client"

import { Sparkles, Loader2, Eye, Calendar, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Video {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  viewCount: string
  enhancedTitle?: string
  reason?: string
  isEnhancing?: boolean
}

interface VideoCardProps {
  video: Video
  onEnhance: () => void
  hasToken: boolean
}

export function VideoCard({ video, onEnhance, hasToken }: VideoCardProps) {
  return (
    <Card className="border-border bg-card hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-md">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Thumbnail */}
          <div className="w-full md:w-48 flex-shrink-0">
            <a
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full aspect-video rounded-lg object-cover border border-border hover:border-primary/50 transition-colors"
              />
            </a>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* Original Title */}
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-medium text-foreground text-sm sm:text-base leading-tight">
                  Original Title
                </h4>
                <Button
                  onClick={onEnhance}
                  disabled={!hasToken || video.isEnhancing || !!video.enhancedTitle}
                  size="sm"
                  variant="outline"
                  className="flex-shrink-0 text-xs sm:text-sm"
                >
                  {video.isEnhancing ? (
                    <>
                      <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Enhancing...</span>
                      <span className="sm:hidden">...</span>
                    </>
                  ) : video.enhancedTitle ? (
                    <>
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-primary" />
                      <span className="hidden sm:inline">Enhanced</span>
                      <span className="sm:hidden">✓</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Enhance</span>
                      <span className="sm:hidden">AI</span>
                    </>
                  )}
                </Button>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base break-words">{video.title}</p>
            </div>

            {/* Enhanced Title */}
            {video.enhancedTitle && (
              <div className="p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-2 mb-2">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Enhanced Title</h4>
                </div>
                <p className="text-foreground mb-3 text-sm sm:text-base font-medium break-words">
                  {video.enhancedTitle}
                </p>
                {video.reason && (
                  <div className="flex items-start gap-2 mt-2 pt-2 border-t border-primary/10">
                    <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-primary/70 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-muted-foreground italic">{video.reason}</p>
                  </div>
                )}
              </div>
            )}

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{video.viewCount} views</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{video.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
