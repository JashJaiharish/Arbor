import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Card } from '../../components/ui';
import { colors, spacing } from '../../constants';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;

    setLoading(true);
    try {
      const displayName = email.split('@')[0];
      await login(displayName, email);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async (name: string) => {
    setLoading(true);
    try {
      await login(name);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Quick login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🌿</Text>
          </View>
          <Text style={styles.title}>Arbor</Text>
          <Text style={styles.subtitle}>Grow. Learn. Trade. Share.</Text>
        </View>

        <Card style={styles.formContainer}>
          <Text style={styles.formTitle}>Welcome Back</Text>

          <Input
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
          />

          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            style={styles.loginButton}
          />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.quickLoginContainer}>
            <Button
              title="Google"
              onPress={() => handleQuickLogin('Google User')}
              variant="outline"
              style={styles.quickLoginButton}
            />
            <Button
              title="Guest"
              onPress={() => handleQuickLogin('Guest')}
              variant="outline"
              style={styles.quickLoginButton}
            />
          </View>

          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text
              style={styles.signupLink}
              onPress={() => router.push('/auth/signup')}
            >
              Sign Up
            </Text>
          </Text>
        </Card>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms & Privacy Policy
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logoContainer: {
    marginBottom: spacing.md,
  },
  logo: {
    fontSize: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.surface,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.primaryLight,
    opacity: 0.9,
  },
  formContainer: {
    marginBottom: spacing.lg,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  loginButton: {
    marginBottom: spacing.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: spacing.md,
    fontSize: 12,
    color: colors.textLight,
  },
  quickLoginContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  quickLoginButton: {
    flex: 1,
  },
  signupText: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
  },
  signupLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 10,
    color: colors.primaryLight,
    textAlign: 'center',
    opacity: 0.8,
  },
});