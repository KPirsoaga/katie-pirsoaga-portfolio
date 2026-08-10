import assert from "node:assert/strict";
import test from "node:test";

test("published content meets editorial requirements", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const ctx = {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  };
  const waitUntil = { waitUntil() {}, passThroughOnException() {} };

  async function fetchPage(path) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      ctx,
      waitUntil,
    );
    assert.equal(response.status, 200);
    return await response.text();
  }

  const home = await fetchPage("/");
  const experience = await fetchPage("/experience");
  const projects = await fetchPage("/projects");
  const all = home + experience + projects;

  assert.equal(all.includes("\u2014"), false, "em dash found");
  assert.equal(all.includes("\u2013"), false, "en dash found");
  assert.match(experience, /Sheffield Hallam University · 2:1/);
  assert.doesNotMatch(experience, /University of Sheffield · 2:1/);
  assert.match(all, /Salesforce Certified Administrator/);
  assert.doesNotMatch(all, /Platform Administrator/);
  assert.doesNotMatch(all, /Certified 2026/);
  assert.match(projects, /Operational · user testing/);
  assert.match(projects, /Pretix/);
  assert.match(home, /Register and pay/);
  assert.doesNotMatch(home, /Sage/);
  assert.doesNotMatch(home, /Dayforce/);
  assert.doesNotMatch(projects, /Sage/);
  assert.match(experience, /Sage/);
  assert.match(home, /I make complicated/);
  assert.match(home, /work\./);
  assert.match(home, /English communication · Conference operations · Digital systems/);
  assert.match(projects, /Open Journal Systems/);
  assert.match(all, /Venueless/);
  assert.match(all, /Say It Your Way Romanian/);
  assert.match(home, /mobileNavButton/);
  assert.match(home, /KP\./);
  assert.match(projects, /Skills and applications/);
  assert.match(projects, /catalogue of systems, products and programmes/);
  assert.match(projects, /DevAccelerator/);
  assert.match(home, /DevAccelerator/);
  assert.match(experience, /credentialCard/);
});
