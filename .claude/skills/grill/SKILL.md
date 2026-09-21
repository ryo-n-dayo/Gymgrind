---
name: grill
description: Interview the user Socratically before writing any spec, design doc, plan, or PRD — one open decision at a time, each carrying a recommended answer, with nothing committed to a document until the concept stops moving. Use this whenever a request asks for a spec, design, plan, PRD, architecture, or "how should we build X" from a short or vague prompt, and whenever the user says "grill me", "ask me first", 「質問して」, 「詰めてから」, 「ソクラテス式で」, or says an earlier draft guessed wrong. The test is simple — if writing the document would mean inventing decisions the user has not actually made, run this first instead of guessing.
---

# Grill — Socratic design interview

Agents fill gaps silently. Handed a two-line prompt and asked for a spec, an agent does not stop
at the decisions the user hasn't made — it picks defaults and writes them in. The result reads as
finished, and the guesses are indistinguishable from the choices, so they surface late: at review,
or when the built feature handles an edge case nobody chose.

This skill inverts that. Instead of guessing, ask — one decision at a time, each with a recommended
answer — and write nothing durable until the concept stops moving.

The user's answers are the input, so conduct the interview in the language they are writing in.

## The loop

### 1. Survey before asking

Read the request, and where it touches existing code, read that code. Then list — for yourself, not
for them — every decision that has to be settled before the thing is buildable, and rank it:

- **Load-bearing first.** A decision that constrains other decisions earns its turn, because
  answering it can delete three later questions. (Whether cancellation is ever partial decides what
  refunds, timing, and the data model even have to handle.)
- **Expensive-to-reverse next.** Data model, external contracts, anything users will see and learn.
- **Cheap and reversible — don't ask.** Decide it, note it as yours, move on.

Never ask what the codebase can answer. "Which states does an order have today?" is a question you
can answer yourself, and spending a turn on it costs you the patience you need for the real ones.

### 2. Ask one decision per turn

One is the whole discipline. Two questions in a turn get you one answer; five get you a shrug. One
question gets a real answer, and often a correction you didn't see coming — which is the point.

The exception: when several questions collapse into one real choice, ask the one choice. Walking
someone through three questions that share an answer is its own kind of noise.

### 3. Carry a recommendation

A bare open question ("How should refunds work?") hands the work back to the person who came to you
to have less of it. A recommendation turns the same question into a review — they say yes or they
correct you, and both take seconds. Being wrong is useful here: a wrong recommendation draws out
the real constraint faster than an open question does.

Shape each question roughly like this, adapted to the decision:

> **Decision 3 of ~7 — Are partial cancellations allowed?**
>
> What it changes: if yes, refunds become per-line rather than per-order, and an order needs a state
> between active and cancelled.
>
> - **A (recommended)** — whole order only. Matches how support handles it today and keeps one
>   refund path. Cost: a customer dropping one item has to cancel and re-order.
> - B — per line item. Right if partial cancels are common. Cost: partial-refund accounting, plus a
>   new state everything downstream has to handle.
>
> Which one — or is there a case I'm missing?

Keep the cost line honest. A recommendation with no stated cost reads like a decision already made,
and once that happens the user stops reading them.

### 4. Record what is settled

Keep a running ledger of decisions and their answers, and show it compactly whenever it has changed
enough to be worth re-reading — every few questions, and always before you write anything. It lets
the user watch the shape form and reverse an earlier answer while reversing is still free.

If a new answer contradicts something already settled, say so on the spot and ask which one holds.
Quietly patching the conflict is the same failure this technique exists to prevent.

"You decide" is a complete answer. Make the call, record it as yours, and keep going — don't re-ask
it later in different words.

### 5. Stop when the concept stops moving

Signals you're done:

- The remaining unknowns are implementation details you can decide and reverse cheaply.
- New answers stop changing earlier ones.
- The user says enough, or starts answering "whatever you think".

Then — and only then — write the artifact that was asked for. Write the settled decisions as
decisions, and mark anything you chose on the user's behalf so it stays visible instead of being
laundered into the prose.

If the user cuts the interview short and wants the document now, write it. List the assumptions you
had to make at the top, so the guesses are still labelled as guesses.

## When conversation can't settle it

Some questions can't be answered in the abstract — the user has to see the thing before they know
what they want. Layout, tone, pacing, anything you'd answer with "depends how it feels". Stop
interviewing, build the smallest prototype that makes the difference visible, then ask again with
it in hand.

## Failure modes

- **Fake questions** — asking about something you'd accept either answer to. That buys agreement,
  not information. Decide it yourself.
- **The spec leaking into the interview** — answering with three paragraphs of finished design.
  While the concept is still moving, keep it in conversation, where changing it is free.
- **Starting to build mid-interview.** The cost of being wrong is never lower than right now.
- **Interviewing forever.** Every question spends attention; spend it on the decisions that
  actually fork the design.
