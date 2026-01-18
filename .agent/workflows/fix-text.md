---
description: Fix typography layout issues (widows, orphans, stray words) in headlines.
---

# Typography Fix Protocol (`/fix-text`)

**Trigger:** When the user notices "stray words" (1-2 characters alone on a line) or uneven headlines.

## 1. The Diagnosis
Check for:
-   **Widows/Orphans:** Single words dropping to a new line.
-   **Split Phrases:** Key terms (especially in Chinese) being split mid-phrase (e.g., "AI 销" | "售团队").

## 2. The Solution Stack

### A. The Modern Fix (`text-balance`)
For headings that just need better automatic wrapping:
```tsx
// Add 'text-balance' to the class list
<h1 className="text-4xl ... text-balance">
  Your Headline Here
</h1>
```

### B. The Surgical Fix (`whitespace-nowrap` or `inline-block`)
For Chinese phrases or key terms that MUST stay together:
```tsx
// Force the phrase to be an atomic block
<span className="inline-block">AI 销售团队</span>
```

### C. The Manual Break (`<br />`)
For absolute control over line breaks at specific breakpoints:
```tsx
// Break only on desktop, let mobile flow naturally
如何建立一个 <br className="hidden md:block" />
24小时...
```

## 3. Execution Steps
1.  **Identify** the specific text block causing the visual issue.
2.  **Apply** `text-balance` first (safest).
3.  **Escalate** to `inline-block` spans if the browser still breaks it awkwardly.
4.  **Verify** across mobile and desktop sizes.
