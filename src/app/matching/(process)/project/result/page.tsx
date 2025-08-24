'use client'
import { MatchingResultPageTemplate } from '@/components/pageTemplates/MatchingResultPageTemplate'

import { useProjectStore } from '@/providers/ProjectMatchingResultProvider'

export default function Page() {
  const { result } = useProjectStore(state => state)

  return (
    <MatchingResultPageTemplate>
      <MatchingResultPageTemplate.ProjectImageDisplayer projects={result} />
    </MatchingResultPageTemplate>
  )
}
