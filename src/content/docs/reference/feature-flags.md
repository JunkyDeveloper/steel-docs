---
title: Feature Flags
description: Complete reference of all compile-time feature flags in SteelMC
sidebar:
  order: 1
---

SteelMC uses Rust's feature flag system to enable or disable certain functionality at compile time. This allows you to customize your build for specific use cases.

## steel (Main Package)

These flags control the main server executable.

| Feature | Default | Description |
|---------|---------|-------------|
| `mimalloc` | ✅ Enabled | Use MiMalloc as the memory allocator for improved performance |
| `deadlock_detection` | ❌ Disabled | Enable deadlock detection using parking_lot (for debugging) |
| `dhat-heap` | ❌ Disabled | Enable DHAT heap profiler for memory profiling |

### Usage Example

```bash
# Build with deadlock detection enabled
cargo build --features deadlock_detection

# Build without mimalloc
cargo build --no-default-features
```

## steel-core

These flags control the core game logic.

| Feature | Default | Description |
|---------|---------|-------------|
| `stand-alone` | ❌ Disabled | Enable stand-alone mode with embedded default favicon |
| `debug_measurement_output` | ✅ Enabled | Enable debug output for chunk generation and tick measurements |

### stand-alone Mode

When enabled, the server includes a default favicon as embedded bytes. This is useful for distributing a single binary without external assets.

### debug_measurement_output

Prints detailed timing information for:
- Chunk generation performance
- Tick measurements
- Performance profiling data

## steel-registry

These flags control the game registry system.

| Feature | Default | Description |
|---------|---------|-------------|
| `fmt` | ❌ Disabled | Enable formatting features |
| `minecraft-src` | ❌ Disabled | Use Minecraft source mappings |

## Combining Features

You can combine multiple features:

```bash
# Build with multiple features
cargo build --features "deadlock_detection,debug_measurement_output"

# Build for standalone distribution
cargo build --release --features stand-alone
```

## Production Recommendations

For production servers, we recommend:

- **Keep `mimalloc` enabled** - Provides significant memory allocation performance improvements
- **Disable `deadlock_detection`** - Only needed for debugging
- **Disable `dhat-heap`** - Only needed for memory profiling
- **Consider `stand-alone`** - If distributing as a single binary
