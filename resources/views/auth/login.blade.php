@extends('layouts.app')

@section('content')
<div class="container mx-auto">
    <div class="row justify-content-center">
        <div class="mx-auto lg:w-6/12">
            <div class="card bg-white p-8 lg:p-12 shadow">
                <div class="card-header text-3xl font-bold text-black mb-8">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="mb-1 inline-flex">{{ __('E-Mail Address') }}</label>

                            <div class="mb-6">
                                <input id="email" type="email" class="appearance-none w-full border rounded px-3 py-2 outline-none focus:border-blue-600 shadow @error('email') is-invalid border-red-800 @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="text-red-800" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-6">
                            <label for="password" class="mb-1 inline-flex">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="appearance-none w-full border rounded px-3 py-2 outline-none focus:border-blue-600 shadow  @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <div class="flex items-center">
                                <button type="submit" class="btn border text-gray-900 px-6 py-2 rounded-md shadow-sm hover:border-gray-900 transition transition-colors duration-300 ease-in-out">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link ml-auto hover:text-blue-700" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
